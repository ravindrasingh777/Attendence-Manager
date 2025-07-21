const ConnectToDB =require('./db')

ConnectToDB()
  .then(() => console.log('🎉 Test complete'))
  .catch((err) => console.error('❌ Error during test:', err.message));
