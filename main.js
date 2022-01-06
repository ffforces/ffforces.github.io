

  import * as THREE from 'https://cdn.skypack.dev/three'
  import {GLTFLoader} from 'https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/GLTFLoader.js'
    var audio = document.getElementById("audio");
    var started=false;
  //const canvas = document.querySelector('.webgl')
const canvas = document.getElementById( 'webgl' );
  
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.set( 0, 2, 8 );

  const renderer = new THREE.WebGLRenderer( { antialias: false, canvas:canvas } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );



  renderer.setClearColor( 0x000000, 1 );

  //const controls = new THREE.OrbitControls( camera, renderer.domElement );
  //const gridHelper = new THREE.GridHelper( 10, 10 );
  //scene.add( gridHelper );

  const lightA = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( lightA );

  const lightP = new THREE.PointLight( 0xddff00, 1  );
  lightP.position.set( -1, 3, 5 );
  scene.add( lightP );

  // --- data input ---
  let yRotation =  0;
  let xRotation =  0;
  let xPosition = -1.2;
  let zPosition =  3.5;
  // -----         -----

  const loader = new GLTFLoader();


  //loader.load('scene.glb', process );
loader.load('https://dl.dropbox.com/s/zt1jzov3antdvfh/scene.glb', process );
//https://dl.dropbox.com/s/8y4mjxww03t7kf0/
//https://dl.dropbox.com/s/zt1jzov3antdvfh/scene.glb


  let model = new THREE.Object3D( );
  let c, size; // model center and size

  let t = 0;
  let x0 = xPosition;
  let dx;


  let zz=0;
  let xx=0;

//var button=document.getElementById('button')

document.getElementById('button').addEventListener("click", animation);
//button.onclick = function animation( ) {
function animation( ) {
animate();
//document.getElementById('button').style.display = 'none';
//document.getElementById("audio").play();
}



function animate( ) {

    //var x = document.getElementById("button");


    //requestAnimationFrame( animate );

    zz += 0.00113;
    //zz=zz*0.1;
    zz%5.00113;

    xx += 0.00127;
    //zz=zz*0.1;
    xx%9.00127;




    setTimeout( function() {

           requestAnimationFrame( animate );

       }, 1000 / 30 );

    yRotation += Math.sin(Math.abs(Math.sin(zz)*0.0997));
    xRotation += Math.sin(Math.sin(xx)*0.0577);
    //t += 0.001;
    t=1;
    dx = Math.sin( t );
    xPosition = x0 + dx;

    model.rotation.y = yRotation;
    model.rotation.x = xRotation;
    model.position.x = xPosition;
    model.position.z = zPosition;


    renderer.render( scene, camera );



    }








    function process( glb ) {

    //  document.getElementById(button).style.display = 'none';
      //  document.getElementById("audio").play();
    const box = new THREE.Box3( ).setFromObject( glb.scene );

    const material = new THREE.MeshPhysicalMaterial( {	metalness: 0, roughness: 0.1, transmission: 0.9, transparent: true, opacity:0			} );

    //box.material = material;
    //box.material.opacity = 1 + Math.sin(new Date().getTime() * .0025);
    //box.material.opacity = 0;

    //const mesh = new THREE.Mesh(x100, new THREE.MeshLambertMaterial() );

    //scene.add( mesh );

  // uus testi:

    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    //var cube = new THREE.Mesh( geometry, material );



    const boxHelper = new THREE.Box3Helper( box, 0xffff00 );
      scene.add( boxHelper );

    c = box.getCenter( new THREE.Vector3( ) );
    size = box.getSize( new THREE.Vector3( ) );

    glb.scene.position.set( -c.x, size.y / 2 - c.y, -c.z );

    model.add(material)
    model.add( glb.scene );

    scene.add( model );

    }
