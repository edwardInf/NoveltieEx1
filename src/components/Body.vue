<template>
  <div class="body">
  <md-layout id="sectionone">
  	<img id="imgleft" src="../assets/mcomerce.png" alt="noveltie">
  
	<md-layout  id="divone" md-column md-flex>
		<md-layout>
		    	<span id ="txtone" class="md-display-3" align="left">Nuestro trabajo ayuda al crecimiento de tu empresa</span>
		    	<span class="md-title" align="justify">Te acompañamos en el proceso de transformación digital de tu empresa. Nos especializamos en que puedas aplicar las tecnologías para incrementar tus rentas, minimizar tus costos, optimizar tus procesos y estar más conectado a tus clientes.</span>
		    	<md-button class="md-raised md-primary">Qué hacemos</md-button>
				<md-button class="md-raised">Nosotros</md-button>
		</md-layout>
	  </md-layout>
  </md-layout>

  <md-layout id="sectiontwo"> 
	<md-layout id="divtwo" md-column md-flex>
		<md-layout>
		    	<span id ="txtone" class="md-display-3" align="left">Apertura tu tienda virtual</span>
		    	<span id ="txtwo" class="md-headline">Plataforma E-Commerce</span>
		    	<span class="md-title" align="justify">Apertura de canales de venta por internet mejoramos la experincia de compra de tu cliente, para fidelizarlos</span>
				<md-button class="md-raised md transparent">Nosotros</md-button>
		</md-layout>
	  </md-layout>
  	<img id="imgright" src="../assets/laptop.png" alt="noveltie">

  </md-layout>

  <md-layout id="sectionthree">
  	<span id ="txtone2" class="md-display-3" align="center">Soluciones que aumentan tus ventas y atrae mas clientes</span>
	<md-layout>
		<md-layout  md-column="true" md-flex="20" md-flex-offset="15">
			<md-layout md-align="center">
				<img id ="imgT" src="../assets/Mapa.png" alt="noveltie">
			</md-layout>
  			<md-layout md-align="center">
  				<span id="txtone" class="md-headline">Mayor alcance de mercado</span>
				<span class="md-subheading">No hay limites geográficos para tu negocio en internet</span>
  			</md-layout>
	  	</md-layout>

	  	<md-layout md-column="true" md-flex="20" md-flex-offset="10">
	  		<md-layout md-gutter="true" md-align="center">
  				<img id ="imgT" src="../assets/reducecostos.png" alt="noveltie">
			</md-layout>
  			<md-layout md-align="center">
  				<span id="txtone" class="md-headline">Reduce Costos Operativos</span>
  				<span class="md-subheading">Evita costos de alquiler, mobiliario, servicios básicos.</span>
  			</md-layout>
	  	</md-layout>

	  	<md-layout md-column="true" md-flex="15" md-flex-offset="10">
	  		<md-layout md-gutter="true" md-align="center">
  				<img id ="imgT" src="../assets/fidelizar.png" alt="noveltie">
			</md-layout>
  			<md-layout md-align="center">
  				<span id="txtone" class="md-headline">Fideliza a tus clientes</span>
  				<span class="md-subheading">Conoce mejor sus precios y publica descuentos.</span>
  			</md-layout>
	  	</md-layout>
	</md-layout>
  </md-layout>

  <md-layout id="sectionfour" md-column="true">
  	<span id ="txtone" class="md-display-3" align="center">Ellos confían en nosotros</span>
  	<md-layout :md-gutter="24">
	  <md-layout md-align="center">
  			<img id="imgLogos" src="../assets/technopark.png" alt="noveltie">
	  </md-layout>

	  <md-layout md-align="center">
  			<img id="imgLogos" src="../assets/produce.jpg" alt="noveltie">
	  </md-layout>

	  <md-layout md-align="center">
  			<img id="imgLogos" src="../assets/minp.png" alt="noveltie">
	  </md-layout>

	  <md-layout md-align="center">
  			<img id="imgLogos" src="../assets/techline.png" alt="noveltie">
	  </md-layout>
	</md-layout>
  </md-layout>

  <md-layout id="sectionfive" md-column="true"> 
  	<span id ="txthree" class="md-display-3" align="center">Nuestras Sedes</span>
	<md-layout>
		<md-layout md-column="true" md-flex="20" md-flex-offset="10">
  				<span id ="txthree" align="left" class="md-display-1">Tacna</span>
  			<md-layout md-row>
	  			<md-layout md-column md-gutter>
				    <md-layout>
						<md-icon id="icon1" class="md-accent">location_on</md-icon>
				    </md-layout>
				    <md-layout>
				    	<md-icon id="icon1" class="md-accent">phone</md-icon>
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon1" class="md-accent">email</md-icon>
				    </md-layout>
				</md-layout>
  				<md-layout md-column md-gutter>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">Av. San Martin 1132, Perú</span>
				    </md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">56-(57)2210470</span>				    
					</md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">servicios@noveltie.la</span>				    
					</md-layout>
				</md-layout>
  			</md-layout>

  	</md-layout>

	  	<md-layout md-column="true" md-flex="20" md-flex-offset="10">
  				<span id ="txthree" align="left" class="md-display-1">Lima</span>
  			<md-layout md-row>
	  			<md-layout md-column md-gutter>
				    <md-layout>
						<md-icon id="icon1" class="md-accent">location_on</md-icon>
				    </md-layout>
				    <md-layout>
				    	<md-icon id="icon1" class="md-accent">phone</md-icon>
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon1" class="md-accent">email</md-icon>
				    </md-layout>
				</md-layout>
  				<md-layout md-column md-gutter>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">Los Alamos 3028, Perú</span>
				    </md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">56-(57)228196</span>				    
					</md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">servicios@noveltie.la</span>				    
					</md-layout>
				</md-layout>
  			</md-layout>
	  	</md-layout>

	  	<md-layout md-column="true" md-flex="20" md-flex-offset="10">
  				<span id ="txthree" align="left" class="md-display-1">Antofagasta</span>
  			<md-layout md-row>
	  			<md-layout md-column md-gutter>
				    <md-layout>
						<md-icon id="icon1" class="md-accent">location_on</md-icon>
				    </md-layout>
				    <md-layout>
				    	<md-icon id="icon1" class="md-accent">phone</md-icon>
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon1" class="md-accent">email</md-icon>
				    </md-layout>
				</md-layout>
  				<md-layout md-column md-gutter>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">18 de Setiembre 1854, Chile</span>
				    </md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">56-(58)2312977</span>				    
					</md-layout>
				    <md-layout>
						<span id ="txthreev" class="md-subheading">servicios@noveltie.la</span>				    
					</md-layout>
				</md-layout>
  			</md-layout>
	  	</md-layout>

	</md-layout>
  </md-layout>

  <md-layout id="sectionsix"> 
	<md-layout>
		<md-layout md-column="true" md-flex="30" md-flex-offset="5">
  				<span id ="txthree2" align="left" class="md-headline">Quiénes somos?</span>
  			<md-layout md-row>
				<span id ="txthree" align="justify" class="md-subheading">Somos una organización que en los últimos años se ha especializado en capacitación, entrenamiento y formación en el área Operaciones Mina a Rajo Abierto</span>
  			</md-layout>

  	</md-layout>

	  	<md-layout md-column="true" md-flex="20" md-flex-offset="10">
  				<span id ="txthree2" align="left" class="md-headline">Más información</span>
  			<md-layout md-row>
	  			<md-layout md-column md-gutter>
				    <md-layout>
						<md-icon id="icon2" class="md-accent">done</md-icon>
						<span id ="txthreevt" align="left" class="md-subheading">Nosotros</span>
				    </md-layout>
				    <md-layout>
				    	<md-icon id="icon2" class="md-accent">done</md-icon>
				    	<span id ="txthreevt" align="left" class="md-subheading">Comercio Electrónico</span>				    
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon2" class="md-accent">done</md-icon>
	 					<span id ="txthreevt" align="left" class="md-subheading">Blog</span>
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon2" class="md-accent">book</md-icon>
	 					<span id ="txthreevt" align="left" class="md-subheading">Libro de reclamaciones</span>
				    </md-layout>
				</md-layout>
  			</md-layout>
	  	</md-layout>

	  	<md-layout md-column="true" md-flex="20" md-flex-offset="10">
  				<span id ="txthree2" align="left" class="md-headline">Contáctanos</span>
  			<md-layout md-row>
	  			<md-layout md-column md-gutter>
				    <md-layout>
						<md-icon id="icon2" class="md-accent">location_on</md-icon>
						<span id ="txthreevt" align="left" class="md-subheading">Av. San Martin 1132, Perú</span>
				    </md-layout>
				    <md-layout>
				    	<md-icon id="icon2" class="md-accent">phone</md-icon>
				    	<span id ="txthreevt" align="left" class="md-subheading">56-(57)2210470</span>				    
				    </md-layout>
				    <md-layout>
	 					<md-icon id="icon2" class="md-accent">mail</md-icon>
	 					<span id ="txthreevt" align="left" class="md-subheading">servicios@noveltie.la</span>
				    </md-layout>
				   
				</md-layout>
  			</md-layout>
	  	</md-layout>


	</md-layout>

  </md-layout>


  </div>
</template>

<script>
export default {
  name: 'body',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
	padding: 0%;
}
#sectionone{
	padding-bottom: 9%;
	background: #FAFAFA;
	padding-top: 13%;
}
#sectiontwo{
	padding-bottom: 9%;
	padding-top: 13%;
}
#sectionthree{
	padding-right: 2%;
	padding-bottom: 9%;
	padding-top: 10%;
	background: #FAFAFA;
}
#sectionfour{
	padding-right: 10%;
	padding-left: 10%;
	padding-bottom: 8%;
	padding-top: 8%;
}
#sectionfive{
	background-image: url("../assets/portada_noveltie.jpg");
	background-size: 100%;
	background-repeat:no-repeat;
	padding-right: 5%;
	padding-left: 5%;
	padding-bottom: 12%;
	padding-top: 5%;
}
#sectionsix{
	background-color: black;
	padding-right: 5%;
	padding-left: 10%;
	padding-bottom: 8%;
	padding-top: 8%;
}
#imgleft{
	margin-left: 14%;
	margin-right: 4%;
	width: 30%;
	height: 30%;
}
#divone{
	margin-right: 10%;
}
#imgright{
	margin-right: 10%;
	width: 35%;
	height: 35%;
}
#divtwo{
	margin-left: 14%;
	margin-right: 6%;
}
#txtone{
	margin-bottom: 3%;
	color: black;
}
#txtone2{
	margin-left: 20%;
	margin-right: 16%;
	margin-bottom: 6%;
	color: black;
}
#txtwo{
	margin-bottom: 4%;
	color: #3F51B5;
}
#txthree{
	color: white;
	margin-bottom: 8%;
}
#txthree2{
	color: white;
	margin-bottom: 20%;
}

#btntyone{
	background: #061942;
}
#imgT{
	width: 90%;
	height: 90%;
}
#imgLogos{
	margin-top: 15%;
	width: 200px;
	height: 50px;
}
#materialcolor { 
	color: #FFC107; 
}
#icon1{
	margin-left: 0%;
	margin-bottom: 25%;
}
#icon2{
	margin-left: 0%;
	margin-right: 5%;
	margin-top: -2%;
}
#txthreev{
	margin-top: 0%;
	color: white;
	margin-left: -35%;
	margin-bottom: -5%;
}
#txthreevt{
	margin-top: -2%;
	color: white;
	margin-left: 0%
}
</style>
