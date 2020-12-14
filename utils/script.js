const fs = require('fs')
const path = require('path')
const data = require('./data')
const LoremIpsum = require('lorem-ipsum').LoremIpsum

const loremTitle = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 10,
    min: 5,
  },
})

const loremBody = new LoremIpsum({
  sentencesPerParagraph: {
    max: 15,
    min: 8,
  },
  wordsPerSentence: {
    max: 12,
    min: 6,
  },
})

const newData = data.map((item) => {
  item.title = loremTitle.generateSentences(1)
  item.description = loremBody.generateParagraphs(1)
  return item
})

module.exports = newData
