<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add New Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>
          <v-spacer></v-spacer>
         
             <v-menu v-model="menu" :close-on-content-click="false">

                <v-text-field slot="activator" :value="due" clearable label="Due date" prepend-icon="date_range"></v-text-field>
 
                 <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
                 
            </v-menu>
            
          
          <v-spacer></v-spacer> 
          <v-btn flat @click="submit" class="success mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
            v => v.length >= 3 || 'Mimimum length is 3 characters'
      ]
    }
  },
 methods: {
    submit() {
      if(this.$refs.form.validate()) {
        const project = { 
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'The Net Ninja',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          console.log('added to db')
        })
      }
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due)
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>