import { httpService } from "./http.service.js"

const ENDPOINT = "task"
const TASK_KEY = "taskdb"



export const taskService = {
  query,
  getEmptyTask,
  save,
  remove,
  getById,
}

async function query(filterBy = {}) {
  console.log(filterBy);
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(Id) {
  let task = await httpService.get(`${ENDPOINT}/${Id}`)
  return task
  // const stay = query().find((stay) => stay._id === stayId)
  // console.log(stay)
  // return stay
}

// async function getHostStays(id) {
//   try {
//     const stays = await httpService.get(ENDPOINT)
//     const stayByHost = stays.filter((stay) => stay.host.id === id)
//     console.log(stayByHost)
//     return stayByHost
//   } catch (err) {
//     console.log("Cannot load stays from store", err)
//     throw err
//   }
// }


async function save(task) {
  console.log('service',task)
  const savedtask = task._id
    ? await httpService.put(`${ENDPOINT}/${task._id}`, task)
    : await httpService.post("task", task)
    console.log('fffffffffffffffffffffff',savedtask)
  return savedtask
}



async function remove(task) {
  console.log('service',task._id)
  return await httpService.delete(`${ENDPOINT}/${task._id}`)
  // const stays = query()
  // const idx = stays.findIndex((stay) => stay._id === stayId)
  // stays.splice(idx, 1)
  // utilService.saveToStorage(STAY_KEY, stays)
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

// function _saveLocalStay(stays) {
//   sessionStorage.setItem(STAYS_KEY, JSON.stringify(stays))
//   return stays
// }

// // // function addNewtaskToHost(task) {
// // //    await httpService.put("stay", task)

// function getLabels() {
//   return gLabels
// }

// function updateWished(newStay) {
//   save(newStay)
// }

// // // function addNewstayToHost(stay) {
// // //    await httpService.put("stay", stay)

// // // return stay
// // }

// // function _createStays() {
// //   let stays = utilService.loadFromStorage(STAY_KEY)
// //   if (!stays || !stays.length) {
// //     stays = new Request("/src/services/stays.json")
// //     fetch(stays)
// //       .then((stay) => stay.json())
// //       .then((stays) => utilService.saveToStorage(STAY_KEY, stays))
// //   }
// //   return stays
// // }

// // function update(newStay) {
// //   const gStays = query()
// //   const idx = gStays.findIndex((stay) => stay._id === newStay._id)
// //   gStays.splice(idx, 1, newStay)
// //   utilService.saveToStorage(STAY_KEY, gStays)
// // }
