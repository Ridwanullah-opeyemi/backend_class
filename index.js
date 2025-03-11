const express = require("express")
const app = express()

app.use(express.json())


const PORT = 4003

app.listen(PORT, ()=>{
    console.log('listening for port ' + PORT)
})

app.get('/', (req, res)=>{
    res.send('welcome to aliexpress api')
})



const addProduct = ()=>{

}
app.post("/products", addProduct)




























// const addProduct = (req, res)=>{
//     console.log(req.body);
//     res.status(201).json({
//         message: `has been added successfully!`
//     })
// }

// const updateProduct = (req, res) => {
//     console.log(req.body);
//     res.status(200).json({
//         message: 'Product updated successfully'
//     })
// }

// app.post("/products", addProduct)
// app.patch("/products", updateProduct)