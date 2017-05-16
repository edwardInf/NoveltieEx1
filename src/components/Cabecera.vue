<template>
  <div class="cabecera">
  <md-whiteframe md-elevation="5">
    <md-toolbar class="md-large md-transparent">
	  <div class="md-toolbar-container">
	  	<md-layout md-gutter="true">
			<md-layout md-flex="33" md-align="center">
				<img src="../assets/noveltie.png" alt="noveltie">
			</md-layout>
			<md-layout>
				<md-icon class="md-accent">description</md-icon>
				<md-button id="texto">
	 				<span class="md-body-1">COTIZA AQUÍ</span>
				</md-button>
	 		</md-layout>
	 		<md-layout md-flex="25">
	 			<md-icon class="md-accent">phone</md-icon>
	 			<md-button id="texto">
	 				<span class="md-body-1">+51 952 917 079 - </span>
	 			</md-button>
	 			<md-button>
	 				<span class="md-caption">¿Te llamamos?</span>
				</md-button>
	 		</md-layout>
	  		<md-layout md-gutter="15">
	 			<span id="text-two" class="md-body-1">Idioma:</span>
	 			<md-menu md-align-trigger>
				  <md-button md-menu-trigger>Español</md-button>

				  <md-menu-content>
				    <md-menu-item>Ingles</md-menu-item>
				    <md-menu-item>Frances</md-menu-item>
				  </md-menu-content>
				</md-menu>
	 		</md-layout>
	 		<md-layout>
	 			<md-button class="md-icon-button">
	     			<md-icon class="md-accent">menu</md-icon>
	   			</md-button>
	   			<span  id="text-two" class="md-body-1">MENU</span>
	 		</md-layout>

		</md-layout>
	  </div>
	</md-toolbar>
</md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'cabecera',
  data () {
    return {
      msg: 'Toolbar'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-button{
		padding: 0%;
	}
	#text-two{
		margin-left: 1.3em;
		margin-top: 1.10em;
	}
	#texto{
		margin-left: -3em;
	}
	.md-toolbar{
		padding: 2%;
	}
</style>
