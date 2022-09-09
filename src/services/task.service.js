import { httpService } from "./http.service.js"

const ENDPOINT = "task"




export const taskService = {
  query,
  getEmptyTask,
  save,
  remove,
  getById,
  generateTasks,
  clearTasks,
  getTheNextTask,
  getWorkerStatus,
}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(Id) {
  const res = httpService.get(`/${Id}`)
  return res.data
}

async function _update(task) {
  return httpService.put(`${ENDPOINT}/${task._id}`, task)
}

async function _add(task) {
  return httpService.post(ENDPOINT, task)
}

function save(task) {
  return task._id ? _update(task) : _add(task)
}

async function remove(task) {
  return await httpService.delete(`${ENDPOINT}/${task._id}`)
}

function getEmptyTask() {
  return {
    title: "",
    status:'new',
    importance: 1,
    startDate:null,
    dueDate:null,
  }
}

async function generateTasks() {
  return httpService.get('/generate')
}

async function clearTasks() {
  return httpService.delete(ENDPOINT)
}

function getTheNextTask(){
  return httpService.post(`${ENDPOINT}/getNextTask`)
}

function getWorkerStatus() {
  return httpService.get('/workerStatus')
}

