<script setup>
const router = useRouter();
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const email = ref('')
const password = ref('')

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {

      emit('userData', {
        id: 0,
        name: fullName.value, 
        email: email.value,
        password: password.value
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
  <VRow>
    <VCol cols="12">
      <VCard v-if="userData" flat>
        <VCardText>
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <AppTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Full Name"
                  :placeholder="props.userData.name"
                />
              </VCol>
              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  :placeholder="props.userData.email"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      
      </VCard>
    </VCol>
  </VRow>
</template>
