<template>
    <div>
        <v-data-table :items="items"></v-data-table>
    </div>
  </template>
  
  <script setup>
import axios from '../../axios'
onMounted(async ()=>{
    try {
    const {data} = await axios.get('employeeList');
   
      data.data.forEach(function(item){
        items.value.push({
            name: item.full_name,
            designation:item.designation,
            EmployeeId: item.employee_no,
            "Date of Birth":item.date_of_birth



        })
      })

  } catch (error) {
    console.error(error.response.data);

  }
  console.log(items)
});
  const items = ref([])

  </script>
  
  