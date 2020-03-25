const connection = require('../database/connection');

module.exports = {
    async create(request, responses){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return responses.status(400).json({ error: 'No ONG found with this ID' })
        }
        
        return responses.json(ong);
    }
}