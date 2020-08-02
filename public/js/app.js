'use strict'
const mainVR = () => {
    const scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innnerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    document.body.appendChild(renderer.domElement); 
    let vr = false;
    
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
    
    const mat1 = new THREE.MeshLambertMaterial({
        color: 'rgb(255,255,255)',
        side: THREE.DoubleSide
    });
    
    const plane =  new THREE.Mesh(new THREE.PlaneBufferGeometry(50, 20, 32), mat1);
    plane.position.set(0, 0, -100);
    scene.add(plane);
    
    const light1 = new THREE.DirectionalLight('rgb(255,255,255)',0.9,5);
    light1.position.set(-4,0,10);
    scene.add(light1);
    const render = () => {
        renderer.render(scene, camera);
      }
    console.log('hellooo');
    const drawtoScreen = () => {
        renderer.setAnimationLoop(()=>{
            render();
        })
       
    }
    drawtoScreen();
}

if(window.location.pathname === '/enter') {
    mainVR();
}