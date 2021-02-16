<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Eli Points</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Eli Points</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Eli Points page" points="10"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'eliPoints',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>