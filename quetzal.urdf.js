let robot = {
    name:"chain",
    base:"base_link",
    origin:{rpy:[0, -1.5707, 0], xyz:[0, 0, 0]},
    links:{
        "base_link":{
            visual:{
                origin : { xyz: [0,0,0], rpy:[0, -1.5707, 0]},
                geometry : { mesh : { filename : "meshes/base.dae" } }
            }
        },
        "link1":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link2":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae "} }
            }
        },
        "link3":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link4":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link5":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link6":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link7":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link8":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link9":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "link10":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/link.dae" } }
            }
        },
        "end_effector":{
            visual:{
                //origin : { xyz: [0,0,0], rpy:[0,0,0] },
                geometry : { mesh : { filename : "meshes/grip.dae" } }
            }
        }
    }
}

robot.endeffector = {};
robot.endeffector.frame = "end_effector_joint";
robot.endeffector.position = [ [0.1],[0],[0],[1] ]

robot.joints.joint0 = {parent:"base", child:"link1"};
//robot.joints.joint0.axis = [0,0,1];
robot.joints.joint0.type = "spherical";
robot.joints.joint0.origin = {rpy:[0, -1.5707, 0],  xyz:[0, 0, 0.1]};

robot.joints.joint1 = {parent:"link1", child:"link2"};
//robot.joints.joint1.axis = [0,0,1];
robot.joints.joint1.type = "spherical";
robot.joints.joint1.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint1.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint2 = {parent:"link2", child:"link3"};
//robot.joints.joint_1.axis = [0,0,1];
robot.joints.joint2.type = "spherical";
robot.joints.joint2.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint_1.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};


robot.joints.joint3 = {parent:"link3", child:"link4"};
//robot.joints.joint3.axis = [0,0,1];
robot.joints.joint3.type = "spherical";
robot.joints.joint3.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint3.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};


robot.joints.joint4 = {parent:"link4", child:"link5"};
//robot.joints.joint4.axis = [0,0,1];
robot.joints.joint4.type = "spherical";
robot.joints.joint4.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint4.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint5 = {parent:"link5", child:"link6"};
//robot.joints.joint_1.axis = [0,0,1];
robot.joints.joint5.type = "spherical";
robot.joints.joint5.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint_1.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint6 = {parent:"link6", child:"link7"};
//robot.joints.joint6.axis = [0,0,1];
robot.joints.joint6.type = "spherical";
robot.joints.joint6.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint6.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint7 = {parent:"link7", child:"link8"};
//robot.joints.joint7.axis = [0,0,1];
robot.joints.joint7.type = "spherical";
robot.joints.joint7.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint7.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint8 = {parent:"link8", child:"link9"};
//robot.joints.joint8.axis = [0,0,1];
robot.joints.joint8.type = "spherical";
robot.joints.joint8.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint8.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.joint9 = {parent:"link9", child:"link10"};
//robot.joints.joint_1.axis = [0,0,1];
robot.joints.joint9.type = "spherical";
robot.joints.joint9.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint_1.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.joints.end_effector_joint = {parent:"link10", child:"end_effector"};
//robot.joints.joint_1.axis = [0,0,1];
robot.joints.end_effector_joint.type = "spherical";
robot.joints.end_effector_joint.origin = {xyz:[0.1, 0.0, 0.0]};
//robot.joints.joint_1.limit = {effort:1.4, lower:-1.0472, upper:1.0472, velocity:12.15};

robot.links_geom_imported = true;

let links_geom = {};

  // KE: replace hardcoded robot directory
  // KE: replace file extension processing
progressLinkLoading = 0;
i = 0;
imax = Object.keys(robot.links).length;
for (x in robot.links) {
  filename_split = robot.links[x].visual.geometry.mesh.filename.split('.');
  geom_index = filename_split[0];
  geom_extension = filename_split[filename_split.length-1];
  console.log(geom_index + "  " + geom_extension);
  if (geom_extension === "dae") { // KE: extend to use regex
    // I assume that we will put this directory under URDFRobotModels
    assignFetchModelCollada('./URDFRobotModels/QuetzalArmURDF/'+robot.links[x].visual.geometry.mesh.filename,x);
  }
  else if (geom_extension === "DAE") { // extend to use regex
    assignFetchModelCollada('./URDFRobotModels/QuetzalArmURDF/'+robot.links[x].visual.geometry.mesh.filename,x);
  }
  else {
    assignFetchModelSTL('./URDFRobotModels/QuetzalArmURDF/'+robot.links[x].visual.geometry.mesh.filename,robot.links[x].visual.material,x);
  }
  i++;
  progressLinkLoading = i/imax; 
  console.log("Robot geometry: progressLinkLoading " + progressLinkLoading*100);
}

function assignFetchModelCollada(filename,index) {

    console.log("assignFetchModel : "+filename+" - "+index); 
    var collada_loader = new THREE.ColladaLoader();
    var val = collada_loader.load(filename, 
       function ( collada ) {
            //Collada files could contain complete scenes with camera, light and motion sequences, 
            //we are only interested on loading the agent in this case the robot's link 
            //for this we get the children of the scene which corresponds to the goemetry link itself.
            links_geom[index] = collada.scene.children[2];
        },
        function (xhr) {
            console.log(filename+" - "+index+": "+(xhr.loaded / xhr.total * 100) + '% loaded' );
        }
    );
}

function assignFetchModelSTL(filename,material_urdf,linkname) {

    console.log("assignFetchModel : "+filename+" - "+linkname); 
    var stl_loader = new THREE.STLLoader();
    var val = stl_loader.load(filename, 
       function ( geometry ) {
            // ocj: add transparency
            var material_color = new THREE.Color(material_urdf.color.rgba[0], material_urdf.color.rgba[1], material_urdf.color.rgba[2]);
            var material = new THREE.MeshLambertMaterial( {color: material_color, side: THREE.DoubleSide} );
            links_geom[linkname] = new THREE.Mesh( geometry, material ) ;
        } 
    );
}
