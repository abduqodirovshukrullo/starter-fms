<script setup>
definePage({
  meta: {
    action: 'monitor',
    subject: 'own',
  },
});
import LogisticsCardStatistics from '@/views/apps/logistics/LogisticsCardStatistics.vue'
import LogisticsOverviewTable from '@/views/apps/logistics/LogisticsOverviewTable.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <LogisticsCardStatistics />
    </VCol>
    <VCol cols="12">
      <LogisticsOverviewTable />
    </VCol>
  </VRow>
</template>
