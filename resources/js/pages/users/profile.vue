<script setup>
import UserProfile from '@/views/pages/users/UserProfile.vue';
const user = useCookie('userData')
definePage({
  meta: {
    action: 'monitor',
    subject: 'own',
  },
});

const { data: userData } = await useApi(`/dashboard/admin/user/${user.value.id}`)
</script>

<template>
  <section>
    <VRow class="d-flex justify-center">
      <VCol
        cols="4"
        md="5"
        lg="4"
      >
        <UserProfile :user-data="userData.result" />
      </VCol>
    </VRow>
  </section>
</template>
