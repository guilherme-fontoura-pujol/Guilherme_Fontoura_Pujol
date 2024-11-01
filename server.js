import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());


app.post('/clientes', async (req, res) => {
    const { nome, altura, nascim, cidade_id } = req.body;

    try {
        const novoCliente = await prisma.clientes.create({
            data: { nome, altura, nascim: new Date(nascim), cidade_id }
        });
        res.status(201).json(novoCliente);
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        res.status(500).json({ error: "Erro ao cadastrar cliente." });
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await prisma.clientes.findMany();
        res.status(200).json(clientes);
    } catch (error) {
        console.error("Erro ao listar clientes:", error);
        res.status(500).json({ error: "Erro ao listar clientes." });
    }
});

app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, altura, nascim, cidade_id } = req.body;

    try {
        const clienteAtualizado = await prisma.clientes.update({
            where: { id: parseInt(id) },
            data: { nome, altura, nascim: new Date(nascim), cidade_id }
        });
        res.status(200).json(clienteAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        res.status(500).json({ error: "Erro ao atualizar cliente." });
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.clientes.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar cliente:", error);
        res.status(500).json({ error: "Erro ao deletar cliente." });
    }
});

app.post('/produtos', async (req, res) => {
    const { nome, preco, quantidade, categoria_id } = req.body;

    try {
        const novoProduto = await prisma.produtos.create({
            data: { nome, preco, quantidade, categoria_id }
        });
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        res.status(500).json({ error: "Erro ao cadastrar produto." });
    }
});

app.get('/produtos', async (req, res) => {
    try {
        const produtos = await prisma.produtos.findMany();
        res.status(200).json(produtos);
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        res.status(500).json({ error: "Erro ao listar produtos." });
    }
});

app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade, categoria_id } = req.body;

    try {
        const produtoAtualizado = await prisma.produtos.update({
            where: { id: parseInt(id) },
            data: { nome, preco, quantidade, categoria_id }
        });
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        res.status(500).json({ error: "Erro ao atualizar produto." });
    }
});

app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.produtos.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        res.status(500).json({ error: "Erro ao deletar produto." });
    }
});


app.post('/cidades', async (req, res) => {
    const { nome } = req.body;

    try {
        const novaCidade = await prisma.cidades.create({
            data: { nome }
        });
        res.status(201).json(novaCidade);
    } catch (error) {
        console.error("Erro ao cadastrar cidade:", error);
        res.status(500).json({ error: "Erro ao cadastrar cidade." });
    }
});


app.get('/cidades', async (req, res) => {
    try {
        const cidades = await prisma.cidades.findMany();
        res.status(200).json(cidades);
    } catch (error) {
        console.error("Erro ao listar cidades:", error);
        res.status(500).json({ error: "Erro ao listar cidades." });
    }
});

app.put('/cidades/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const cidadeAtualizada = await prisma.cidades.update({
            where: { id: parseInt(id) },
            data: { nome }
        });
        res.status(200).json(cidadeAtualizada);
    } catch (error) {
        console.error("Erro ao atualizar cidade:", error);
        res.status(500).json({ error: "Erro ao atualizar cidade." });
    }
});

app.delete('/cidades/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.cidades.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar cidade:", error);
        res.status(500).json({ error: "Erro ao deletar cidade." });
    }
});


app.post('/categorias', async (req, res) => {
    const { nome } = req.body;

    try {
        const novaCategoria = await prisma.categorias.create({
            data: { nome }
        });
        res.status(201).json(novaCategoria);
    } catch (error) {
        console.error("Erro ao cadastrar categoria:", error);
        res.status(500).json({ error: "Erro ao cadastrar categoria." });
    }
});

app.get('/categorias', async (req, res) => {
    try {
        const categorias = await prisma.categorias.findMany();
        res.status(200).json(categorias);
    } catch (error) {
        console.error("Erro ao listar categorias:", error);
        res.status(500).json({ error: "Erro ao listar categorias." });
    }
});

app.put('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const categoriaAtualizada = await prisma.categorias.update({
            where: { id: parseInt(id) },
            data: { nome }
        });
        res.status(200).json(categoriaAtualizada);
    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);
        res.status(500).json({ error: "Erro ao atualizar categoria." });
    }
});

app.delete('/categorias/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.categorias.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
        res.status(500).json({ error: "Erro ao deletar categoria." });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
