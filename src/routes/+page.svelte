<script>
	import { Stepper, Step } from '@skeletonlabs/skeleton';
  	import { onMount } from 'svelte';
      import { LightSwitch } from '@skeletonlabs/skeleton';
  	let launchDate=Date.parse("2023-10-11T14:05:15+0200")/1000;
	let data=new Date();

	const MINUTES = 60;
	const HOURS = 60*MINUTES;
	const DAYS = 24*HOURS;

	onMount(() => {
   		setInterval(() => {
     		data = new Date();
   		}, 1000);
 	});

	$:difference = (launchDate-(data.getTime()/1000)) 
	$:days=Math.floor(difference/(DAYS))
	$:hours=Math.floor(difference%DAYS/HOURS)
	$:minutes=Math.floor(difference%HOURS/MINUTES)
	$:seconds=Math.floor(difference%MINUTES)

	// window.setTimeout((=>{
	// 	window.requestAnimationFrame(refreshCountDown)
	// 			},1000))
	import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",
  authDomain: "car-bones.firebaseapp.com",
  projectId: "car-bones",
  storageBucket: "car-bones.appspot.com",
  messagingSenderId: "1017119946706",
  appId: "1:1017119946706:web:0e0de7154df6a1d6feba0b",
  measurementId: "G-2P0GYLP3CW"
};

// Initialisez Firebase avec la configuration
const app = initializeApp(firebaseConfig);

//export default app;


	

</script>
<div class="p-4">
	<header class="relative">
		<div class="grid grid-cols-2 relative md:absolute w-full h-full z-20">
			<h1 class=" flex ml-10 mt-6 lg:text-7xl md:text-6xl text-3xl font-bold  text-white">Carbone</h1>
			<div class="">

                <LightSwitch />

				<!-- <label class="inline-flex items-center absolute cursor-pointer right-6 top-8 drop-shadow-md">
				<input type="checkbox" value="" class="sr-only peer">
				<div class="w-11 h-6 flex justify-around bg-gray-200 peer-focus:outline-none ring-2 ring--primary-500/50 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600">
					<img src="sun.png" alt="darkmod"  class="self-center w-4 h-4 ml-1">
					<img src="lune.png" alt="darkmod"class="self-center w-4 h-4 mr-1">
				</div>
				<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
			</label> -->
			</div>
			<div class=" flex flex-col justify-center md:ml-10 md:col-auto col-span-2 mx-auto  mt-20 md:mt-0"> <!--id="countDown" data-time="2023-10-11T21:46:02+0000"-->
				<h3 class="md:text-white font-semibold lg:text-xl md:text-lg text-md mb-8 mt-10 md:mt-0">Lancement prochainement</h3>
				<div class="flex gap-2">
					<div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg">
						<p id="hours" class="lg:text-2xl md:text-xl text-black md:text-white text-center">{days}</p>
						<p class="text-center"><em class="text-xs text-slate-400">jours</em></p>
					</div>
					<div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg">
						<p id="hours" class="lg:text-2xl md:text-xl text-black md:text-white text-center">{hours}</p>
						<p class="text-center"><em class="text-xs text-slate-400">heures</em></p>
					</div>
					<div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg">
						<p id="minutes" class="lg:text-2xl md:text-xl text-black md:text-white text-center">{minutes}</p>
						<p class="text-center"><em class="text-xs text-slate-400">minutes</em></p>
					</div>
					<div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg">
						<p id="seconds" class="lg:text-2xl md:text-xl text-black md:text-white text-center">{seconds}</p>
						<p class="text-center"><em class="text-xs text-slate-400">secondes</em></p>
					</div>
				</div>
			</div>
			
			<div class=" flex justify-end md:mr-10 md:-mb-8 m-10 md:my-0 col-span-2 md:col-auto">
				<div class="  lg:pt-12 md:pt-8 p-4 lg:p-8 md:p-6 lg:w-80 md:w-64 border-4 border-primary-500/50 rounded-lg">
					<p class=" lg:text-xl md:text-lg font-bold text-black md:text-white">Fini le temps perdu à chercher vos factures, tout est regroupé en une application</p>
					<p class="lg:mt-10 md:mt-6 mt-4 lg:text-lg md:text-md text-slate-400">Carbone vous offre un suivi complet de l'historique de votre véhicule, les réparations réalisées, les contrôles techniques</p>
				</div>
			</div>
			
		</div>
		<img src="headPic.jpg" alt="head pic"  class="top-0 absolute z-10 md:static">
		<!-- <h1 class="lg:text-7xl md:text-6xl md:font-bold absolute md:top-6 lg:left-32 md:left-20 md:w-auto text-white">Carbone</h1> -->
		
		<!-- <label class=" inline-flex items-center cursor-pointer absolute right-6 top-8 drop-shadow-md">
			<input type="checkbox" value="" class="sr-only peer">
			<div class="w-11 h-6 flex justify-around bg-gray-200 peer-focus:outline-none ring-2 ring--primary-500/50 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600">
				<img src="sun.png" alt="darmmod"  class="self-center w-4 h-4 ml-1">
				<img src="lune.png" alt="darmmod"class="self-center w-4 h-4 mr-1">
			</div>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
		</label> -->

		<!-- <div class="lg:pt-12 md:pt-8 lg:p-8 md:p-6 lg:w-80 md:w-64 absolute border-2 md:border-4 lg:bottom-4 md:bottom-28 lg:right-10 md:right-6 border-primary-500/50 rounded-lg">
			<p class=" lg:text-xl md:text-lg font-bold text-white">Fini le temps perdu à chercher vos factures, tout est regroupé en une application</p>
			<p class="lg:mt-10 md:mt-6 lg:text-lg md:text-md text-slate-400">Carbone vous offre un suivi complet de l'historique de votre véhicule, les réparations réalisées, les contrôles techniques</p>
		</div> -->
		<!-- <div class="absolute lg:left-20 md:left-8 lg:bottom-40 md:bottom-40 "> 
			<h3 class="text-white text-center font-semibold lg:text-xl md:text-lg mb-8">Lancement prochainement</h3>
			<div class="flex gap-2">
				<div class="lg:w-14 md:w-12 lg:h-14 md:h-12 bg-slate-100/10 rounded-lg">
					<p id="hours" class="lg:text-2xl md:text-xl text-white text-center">{days}</p>
					<p class="text-center"><em class="text-xs text-slate-400">jours</em></p>
				</div>
				<div class="lg:w-14 md:w-12 lg:h-14 md:h-12 bg-slate-100/10 rounded-lg">
					<p id="hours" class="lg:text-2xl md:text-xl text-white text-center">{hours}</p>
					<p class="text-center"><em class="text-xs text-slate-400">heures</em></p>
				</div>
				<div class="lg:w-14 md:w-12 lg:h-14 md:h-12 bg-slate-100/10 rounded-lg">
					<p id="minutes" class="lg:text-2xl md:text-xl text-white text-center">{minutes}</p>
					<p class="text-center"><em class="text-xs text-slate-400">minutes</em></p>
				</div>
				<div class="lg:w-14 md:w-12 lg:h-14 md:h-12  bg-slate-100/10 rounded-lg">
					<p id="seconds" class="lg:text-2xl md:text-xl text-white text-center">{seconds}</p>
					<p class="text-center"><em class="text-xs text-slate-400">secondes</em></p>
				</div>
			</div>
		</div> -->
	</header>
	<div class="mt-16 mb:mt-24 mx-10 lg:mx-36 md:mx-20">
		<h2 class="text-2xl md:text-3xl font-bold mb-8">Présentation du 
			<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary-500/50 relative inline-block">
			<span class="relative text-slate-100">projet</span>
		  </span>
		</h2>
		<p class="md:mb-2 md:text-md lg:text-lg">Carbone, est une application dite Progressive WebApp (PWA)</p>
		<p class="mb-2 md:text-md  lg:text-lg">Ce qui signifie que vous pouvez l'utiliser sur n'importe quel appareil de votre choix</p>
		<p class="text-slate-500">Vous pouvez utiliser cette application comme suivi d'historique, certificat de cession de votre véhicule</p>
		<p class="text-slate-500">bien entendu, si vous avez plusieurs véhicules, vous pourez y avoir accès en un seul clic</p>
		
	</div>	
	
	<p class="mx-10 text-2xl font-bold mb-4 md:text-3xl md:font-bold mt-20 md:mb-8 lg:mx-36 md:mx-20">Roadmap du projet</p>

	<div class="  p-8 grid lg:grid-cols-2 md:grid-cols-5 md:gap-8 justify-items-center content-center md:mx-auto md:max-w-3xl lg:max-w-5xl">
		<img src="/timeStamp.jpg" alt="imagedoc"  class=" bg-cover drop-shadow-lg h-full md:w-full lg:col-span-1 md:col-span-3 ">
		<ol class="mt-4 relative border-l-2 border-primary-500/50 dark:border-gray-700 lg:mr-12 md:mr-4 lg:col-span-1 md:col-span-2 overflow-auto h-full">                  
			<li class="lg:mb-10 md:mb-6 ml-4  mt-5 ">
				<div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Juillet 2023</time>
				<h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Deploiement site internet</h3>
				<p class="mb-4 lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">Le site apporte une vision détaillé du projet et un support pour son financement participatif</p>
			
			</li>
			<li class="lg:mb-10 md:mb-6 ml-4 mt-5">
				<div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 lg:text-sm text-xs  font-normal leading-none text-gray-400 dark:text-gray-500">Aout 2023</time>
				<h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Mise en ligne du POC</h3>
				<p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L'accès au POC est réservé aux inscrits et participants de la cagnotte. Il est accessible depuis n'importe quel moteur de recherche.</p>
			</li>
			<li class="lg:mb-10 md:mb-6 ml-4 mt-5">
				<div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Septembre 2023</time>
				<h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Mise en ligne du MVP</h3>
				<p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">Deploiement de la version (V0), élaboration d'une étude commune avec les participants de la cagnotte. !! Fermeture de la cagnotte !!</p>
			</li>
			<li class="lg:mb-10 md:mb-6 ml-4 mt-5">
				<div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Octobre 2023</time>
				<h3 class="lg:text-lg md:text-md text-sm font-semibold text-gray-900 dark:text-white">Mise en service de l'application</h3>
				<p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L'application est maintenant disponible en avant première et gratuite à vie pour tous les participants (version V1.0)</p>
			</li>
			<li class="ml-4 mt-5">
				<div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 lg:text-sm text-xs  font-normal leading-none text-gray-400 dark:text-gray-500">Novembre 2023</time>
				<h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Lancement de l'application</h3>
				<p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L'application est déployé, ajout de la première fonctionnalité (achat/vente) </p>
			</li>
		</ol>
	</div>
</div>


			