var request = require('supertest');
var express = require('express');
var app = require('./../../server'); 
var expect = require('chai').expect;

describe('Forecast route', function(){

	describe('/', function(){
		it ('should return json on post', function(done) {
			request(app)
				.post('/forecast')
				.end(function(err,res){
					if (err) return done(err); 
					expect(200); 	
					expect('Content-Type', /json/); 
					done(); 
				})
     });
	}); 
});