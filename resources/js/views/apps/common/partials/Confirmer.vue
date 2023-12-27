<script setup>
const props = defineProps({
  isOpen:false,
  loading:false
})

const emit = defineEmits([
  'update:isOpen',
  'accepted'
])

const handleIsOpenValue = val => {
  emit('update:isOpen', val)
}

const closeDialog = () => {
  emit('update:isOpen', false)
}

const confirm = ()=>{
  emit('accepted')
}
</script>

<template>
  <VDialog

    :model-value="props.isOpen"
    @update:model-value="handleIsOpenValue"
    persistent
    class="v-dialog-sm"
  >

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="closeDialog" />

    <!-- Dialog Content -->
    <VCard :loading="loading" border-color="primary" title="Haqiqatdan ham o'chirmoqchimisiz?">
      <VCardText>
        Ma'lumotlarni tiklashni iloji yoq!
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="closeDialog"
        >
          Yo'q
        </VBtn>
        <VBtn color="success" @click="confirm">
          Ha
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
