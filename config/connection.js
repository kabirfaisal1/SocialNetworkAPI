// const { connect, connection } = require('mongoose');

// connect('mongodb://localhost/postsTags', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;


const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-API', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;


