const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
   title: {
     type: String,
     required: true,
   },
   description: {
       type: String,
       required: true,
   },
   url: {
       type: String,
       required: true,
   }, 
   createdAt: {
       type: Date,
       default: Date.now,
   },

});

//Plugin mongoose-paginate para melhorar maginação quando tiver muito volume de dados
ProductSchema.plugin(mongoosePaginate);

//Mostrar para o sistema todo que agora existe uma tabela com os atributos criados anteriormente
mongoose.model('Product', ProductSchema);