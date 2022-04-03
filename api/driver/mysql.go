package driver

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"
)

const (
	maxNumPings = 5
	connSize    = 10
)

func ConnectToMySQL() (*sql.DB, error) {
	dsn := fmt.Sprintf(
		"%v:%v@tcp(%v)/%v?charset=utf8",
		os.Getenv("API_MYSQL_USER"),
		os.Getenv("API_MYSQL_PASSWORD"),
		os.Getenv("API_MYSQL_HOST"),
		os.Getenv("API_MYSQL_DATABASE"),
	)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, fmt.Errorf("Connect: sql.Open: %v (%v)", err, dsn)
	}

	if err := ping(db); err != nil {
		return nil, fmt.Errorf("Connect: ping: %v", err)
	}

	db.SetMaxOpenConns(connSize)
	db.SetMaxIdleConns(connSize)
	db.SetConnMaxLifetime(0)

	return db, nil
}

func ping(db *sql.DB) error {
	var err error

	err = db.Ping()
	if err != nil {
		for i := 1; i <= maxNumPings; i++ {
			if err = db.Ping(); err == nil {
				break
			}
			log.Printf("connecting to MySQL (retry: %v)\n", i)
			time.Sleep(time.Duration(i) * time.Second)
		}
		if err != nil {
			return err
		}
	}

	return nil
}
