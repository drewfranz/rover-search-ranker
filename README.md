#Rover Search Ranker
----
A simple command line application that will parse a list of Rover.com reviews and create a ranked list of sitters.

## Install

```console
$ npm install
```

## Usage

```console
$ ./roverSearchRanker.js parse <source> [destination]
```
The application only has one entrypoint `parse` that accepts a required source file path and an optional destination filename. Using the provided .csv file for the exercise, the command would be:

```console
$ ./roverSearchRanker.js parse reviews.csv
```

## Testing

```console
$ npm test
```
The application uses [Mocha.js](https://github.com/mochajs/mocha) and [Chai.js](https://github.com/chaijs/chai) for unit testing.
