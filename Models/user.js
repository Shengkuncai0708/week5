var faker=require('faker');

var User=[{
			"name": faker.name.findName(),
			"email": faker.internet.email(),
			"id":"1"

		},
		{
			"name": faker.name.findName(),
			"email": faker.internet.email(),
			"id":"2"

		},
		{
			"name": faker.name.findName(),
			"email": faker.internet.email(),
			"id":"3"
		}]

module.exports.User=User;