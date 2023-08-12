import * as THREE from 'three'
import { AmbientLight } from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls'

const canvas = document .getElementById('ss');

const size = {};
size.w = canvas.getBoundingClientRect().width;
size.h = canvas.getBoundingClientRect().height;


const loader = new THREE.TextureLoader();


const scene  = new THREE.Scene()

const camera= new THREE.PerspectiveCamera(75 , size.w/size.h , 0.1 , 1000);
camera.position.z=5;

const renderer = new THREE.WebGLRenderer({canvas , antialias:true, alpha:true});
renderer.setSize(size.w, size.h);

renderer.render(scene, camera);

window.addEventListener('resize', (eve)=>{
   canvas.style.cssText = 'width:100%; height:100%:'
  size.w = canvas.getBoundingClientRect().width;
 size.h = canvas.getBoundingClientRect().height;

 camera.aspect = size.w/size.h;
 camera.updateProjectionMatrix()

 renderer.setSize(size.w , size.h);

 renderer.pixelRatio =Math.min(2 , window.devicePixelRatio)

 console.log(size)


})

// controls*************************************
const orbitcontrol = new OrbitControls(camera, canvas)


// light

const ambient = new THREE.AmbientLight(0xffffff, 3);

scene.add(ambient)

// / sdldjnbl********************************

let cubes = []
let north = []
const group = new THREE.Object3D()

const cubeGeo = new THREE.BoxGeometry(1,1,1);

const cube1 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (1).png')}))
cube1.position.set(0,0,0)
const cube2 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (2).png')}))
cube2.position.set(1,0,0)
const cube3 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (3).png')}))
cube3.position.set(-1,0,0)

group.add(cube1 ,cube2 ,cube3)


const cube4 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (4).png')}))
cube4.position.set(0,1,0)
const cube5 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (5).png')}))
cube5.position.set(1,1,0)
const cube6 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (6).png')}))
cube6.position.set(-1,1,0)
group.add(cube4 ,cube5 ,cube6)


const cube7 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (7).png')}))
cube7.position.set(0,-1,0)
const cube8 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (8).png')}))
cube8.position.set(1,-1,0)
const cube9 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (9).png')}))
cube9.position.set(-1,-1,0)

group.add(cube7 ,cube8 ,cube9)

cubes.push(cube1 ,cube2 ,cube3 , cube4, cube5 , cube6 ,cube7 , cube8 , cube9)



const cube11 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (10).png')}))
cube11.position.set(0,0,1)
const cube22 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (11).png')}))
cube22.position.set(1,0,1)
const cube33 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (12).png')}))
cube33.position.set(-1,0,1)
group.add(cube11 ,cube22 ,cube33)


const cube44 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (13).png')}))
cube44.position.set(0,1,1)
const cube55 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (14).png')}))
cube55.position.set(1,1,1)
const cube66 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (15).png')}))
cube66.position.set(-1,1,1)
group.add(cube44 ,cube55 ,cube66)


const cube77 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (16).png')}))
cube77.position.set(0,-1,1)
const cube88 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (17).png')}))
cube88.position.set(1,-1,1)
const cube99 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (18).png')}))
cube99.position.set(-1,-1,1)

group.add(cube77 ,cube88 ,cube99)

cubes.push(cube11 ,cube22 ,cube33 , cube44, cube55 , cube66 ,cube77 , cube88 , cube99)




const cube111 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (19).png')}))
cube111.position.set(0,0,-1)
const cube222= new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (20).png')}))
cube222.position.set(1,0,-1)
const cube333 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (21).png')}))
cube333.position.set(-1,0,-1)
group.add(cube111 ,cube222 ,cube333)


const cube444 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (22).png')}))
cube444.position.set(0,1,-1)
const cube555 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (23).png')}))
cube555.position.set(1,1,-1)
const cube666 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (24).png')}))
cube666.position.set(-1,1,-1)
group.add(cube444 ,cube555 ,cube666)


const cube777 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (25).png')}))
cube777.position.set(0,-1,-1)
const cube888 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (26).png')}))
cube888.position.set(1,-1,-1)
const cube999 = new THREE.Mesh(cubeGeo , new THREE.MeshMatcapMaterial({matcap:loader.load('/texture/metcap (27).png')}))
cube999.position.set(-1,-1,-1)

group.add(cube777 ,cube888 ,cube999)
cubes.push(cube111 ,cube222 ,cube333 , cube444, cube555 , cube666 ,cube777 , cube888 , cube999)




scene.add(group)


const clock = new THREE.Clock();
let elapsedTime = 0



function animate(){
    elapsedTime = clock.getElapsedTime()*0.7;
    group.rotation.y = elapsedTime
    group.rotation.x = elapsedTime
    group.rotation.z = elapsedTime*2

    cubes.forEach((cube,idx)=>{
      // console.log(cube.position.y)
      cube.rotation.x= elapsedTime 
      cube.rotation.y= elapsedTime 
      // cube.rotation.z= elapsedTime 

      if(cube.position.x>0){
        cube.position.x =  2 + Math.cos(elapsedTime)
      }else if(cube.position.x < 0){

        cube.position.x=  - 2 - Math.cos(elapsedTime)
      }


      if(cube.position.y > 0){
        cube.position.y =  2 + Math.cos(elapsedTime)

      }else if(cube.position.y < 0){

        cube.position.y =  - 2 - Math.cos(elapsedTime)
      }
      
      if(cube.position.z>0){
        cube.position.z =  2 + Math.cos(elapsedTime)
      }else if(cube.position.z < 0){

        cube.position.z=  - 2 - Math.cos(elapsedTime)
      }
      // console.log(cube.position)
      

     
      // cube.position.set()
    })
    
    


renderer.render(scene, camera)

requestAnimationFrame(animate)
}

animate();