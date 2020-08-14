const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LALITKALA',
  password: 'password',
  port: 5433,
})
const getStudents = (request, response) => {
  pool.query('SELECT * FROM master.t_student ORDER BY student_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM master.t_student WHERE id = $1 and is_deleted = 0', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createStudent = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO master.t_student (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const updateStudent = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE master.t_student SET first_name = $1, email = $2 WHERE student_id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteStudent = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('UPDATE master.t_student SET is_deleted = 1 WHERE student_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}