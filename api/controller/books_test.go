package controller

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSum(t *testing.T) {
	actual := 3 + 5
	expected := 8

	assert.Equal(t, expected, actual)
}
