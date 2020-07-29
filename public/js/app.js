'use strict'


 

const vrscene = (scene, renderer) => {
    const mat1 = new THREE.MeshPhongMaterial({
        wireframe: false,
        //color: '#DA3917'
    })

    const plane =  new THREE.Mesh(new THREE.PlaneBufferGeometry(5, 20, 32), mat1);
    plane.position.set(0,0,-10);
    scene.add(plane);
    
    const light1 = new THREE.DirectionalLight('rgb(255,255,255)',0.9,5);
   light1.position.set(-4,0,10);
   scene.add(light1);
}

const mainVR = () => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innnerHeight, 0.1, 1000);
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    let vr = true;
    if(vr === true) {
        document.body.appendChild( VRButton.createButton( renderer ) );
        renderer.xr.enabled = true;
    }
    const onWindowResize = () => {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    window.addEventListener( 'resize', onWindowResize, false );
    
    
    vrscene(scene, renderer);
    const render = () => {
        renderer.render(scene, camera);
      }
    console.log('hello');
    const drawtoScreen = () => {
        render();
    }
    drawtoScreen();
}

if(window.location.pathname === '/enter') {
    mainVR();
}