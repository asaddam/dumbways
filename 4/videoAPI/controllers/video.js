const { sqlDB } = require('../database')

module.exports = {
    getAllVideoDetail : (req, res) => {
        const query = 'SELECT * FROM video_tb;'
        sqlDB.query(query, (err, results) =>{
            if(!err){
                res.status(200).send(results);
            }else{
                console.log(err)
            }
        })
    },
    getAllVideoById: (req, res) => {
        const query = `SELECT * FROM video_tb WHERE id =${mysqlConnection.escape(req.params.id)}`
        sqlDB.query(query, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(results);
        })
    },
    getAllVideobyCategory : (req, res) => {
        const query = `SELECT * FROM video_tb WHERE category_id =${mysqlConnection.escape(req.params.idsinger)}`
        sqlDB.query(query, (err, results) =>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).send(results);
        })
    },
    addVideo: (req, res) => {
        let query = `SELECT id 
        FROM video_tb 
        WHERE title = ${sqlDB.escape(req.body.title)};`
        console.log('Body :', req.body)

        sqlDB.query(query, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }
            
        });
    
        query = `INSERT INTO video_tb SET ? ;`
        sqlDB.query(query, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            console.log(results)
            res.status(200).send(results)
        })
    },
    editVideo: (req,res) => {
        const query = `UPDATE video_tb SET ? WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(query, req.body, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },
    deleteVideo: (req,res) => {
        const query = `DELETE FROM video_tb WHERE id = ${sqlDB.escape(req.params.id)}`;
        
        sqlDB.query(query, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    }

}


