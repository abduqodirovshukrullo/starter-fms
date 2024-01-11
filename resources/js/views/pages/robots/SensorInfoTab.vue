<script setup>
import { VDataTableServer, VDataTable } from 'vuetify/labs/VDataTable'

import { paginationMeta } from '@api-utils/paginationMeta';
import { reactive, ref } from 'vue';
definePage({
  meta: {
    action: 'monitor',
    subject: 'own',
  },

});

const props = defineProps({
  infoData: {
    type: Object
  },
  onProgress:{
    type:Boolean
  }
})


const headers = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Value',
    key: 'value'
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  }
]


// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}


const infos = reactive(
  [
    {
      id:1,
      name: "Battery",
      value: props.infoData.Battery
    },
    {
      id:2,
      name: "Velocity",
      value: props.infoData.Velocity
    },
    {
      id:3,
      name: "Distance",
      value: props.infoData.Distance
    }
  ] 
)



const totalUsers = computed(() => 30)
const isFormValid = ref(false)
const refForm = ref()
const emit = defineEmits([
  'sendToRobot'
])

const formData = ref({
  topic: 'robotCommand',
  Target_X:null,
  Target_Y:null
})
const onSubmit = ()=>{
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('sendToRobot', {
        topic: formData.value.topic, 
        Target_X: formData.value.Target_X,
        Target_Y: formData.value.Target_Y
      })
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}
</script>
<template>
    <section>
      <VRow>
        <VCol
          cols="12"
          sm="12"
          lg="12"
          md="12"
        >
          <VCard title="Real time data">
            <VTable class="text-no-wrap">
              <thead>
                <tr>
                  <th class="text-uppercase">
                    Property
                  </th>
                  <th class="text-uppercase">
                    Value
                  </th>
                  
                </tr>
              </thead>

              <tbody>
                <tr
                 
                >
                  <td>
                    Battery
                  </td>
                  <td>
                    {{ props.infoData.Battery }}
                  </td>
                  
                </tr>
                <tr
                 
                 >
                   <td>
                     Velocity
                   </td>
                   <td>
                     {{ props.infoData.Velocity }}
                   </td>
                   
                 </tr>
                 <tr
                 
                 >
                   <td>
                     Distance
                   </td>
                   <td>
                     {{ props.infoData.Distance }}
                   </td>
                   
                 </tr>
              </tbody>
            </VTable>

            <!-- <VDataTableServer
              v-model:items-per-page="itemsPerPage"
              v-model:page="page"
              :items="infos"
              :items-length="totalUsers"
              :headers="headers"
              class="text-no-wrap"
              @update:options="updateOptions"
            >
              <template #bottom>
                <VDivider />
              </template>
            </VDataTableServer> -->
          </VCard>
        </VCol>
        <!-- <VCol
          cols="8"
          sm="12"
          lg="8"
          md="8"
        > 
          <VCard title="Compounts">
            <VDataTableServer
              v-model:items-per-page="itemsPerPage"
              v-model:page="page"
              :items="infos"
              :items-length="totalUsers"
              :headers="headers"
              class="text-no-wrap"
              @update:options="updateOptions"
            >
              <template #bottom>
                <VDivider />
                <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                  <p class="text-sm text-disabled mb-0">
                    {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
                  </p>

                  <VPagination
                    v-model="page"
                    :length="Math.ceil(totalUsers / itemsPerPage)"
                    :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / itemsPerPage)"
                  >
                    <template #prev="slotProps">
                      <VBtn
                        variant="tonal"
                        color="default"
                        v-bind="slotProps"
                        :icon="false"
                      >
                        Previous
                      </VBtn>
                    </template>

                    <template #next="slotProps">
                      <VBtn
                        variant="tonal"
                        color="default"
                        v-bind="slotProps"
                        :icon="false"
                      >
                        Next
                      </VBtn>
                    </template>
                  </VPagination>
                </div>
              </template>
            </VDataTableServer>
          </VCard>

        </VCol>   -->
      </VRow>
      <VRow>
        <VCol
          cols="12"
          sm="12"
          lg="12"
          md="12"
        >
        
        <VCard >
          <VForm
            title="Move to"
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
          <VProgressLinear
            v-if="props.onProgress"
            indeterminate
            color="primary"
            height="4"
          />
            <VCol>
              <VTextField
                v-model="formData.Target_X"
                label="Longitude"
                variant="outlined"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol>
              <VTextField
                label="Latitude"
                v-model="formData.Target_Y"
                variant="outlined"
                :rules="[requiredValidator]"
              />
            </VCol>
           
            <VCol
              cols="12"
              sm="12"
              lg="12"
              md="12"
            >
              <VBtn type="submit">
                Submit
              </VBtn>
            </VCol>
           
          </VForm>
        </VCard>
        </VCol>
        
       
      </VRow>
    </section>
    
</template>
