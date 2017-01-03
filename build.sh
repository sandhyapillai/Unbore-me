#!/bin/bash

#Npm install
npm install

#Jspm
jspm install

#Test
gulp ci-test

#Create a distribution
gulp dist
