const express = require('express');
const router = express.Router();
var faker = require('faker');

router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({
  	Users:
  	[
  		{
  			id: faker.random.number(),
			  name: faker.name.findName() ,
			  email: faker.internet.email(),
        password: faker.internet.password(),
        photo:faker.image.imageUrl(),
        place:faker.address.city(),
        rate: (faker.random.number()%101)
  		},
  		{
        id: faker.random.number(),
        name: faker.name.findName() ,
        email: faker.internet.email(),
        password: faker.internet.password(),
        photo:faker.image.imageUrl(),
        place:faker.address.city(),
        rate: (faker.random.number()%101)
      },
  		{
        id: faker.random.number(),
        name: faker.name.findName() ,
        email: faker.internet.email(),
        password: faker.internet.password(),
        photo:faker.image.imageUrl(),
        place:faker.address.city(),
        rate: (faker.random.number()%101)
      }
  	]
  });
});

module.exports = router;