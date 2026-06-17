import React from "react";
import E1 from '../crud-img/business-management.jpg'
import E2 from '../crud-img/Date-scinces.jpg'
import E3 from '../crud-img/Digita-marketing.jpg'
import E4 from '../crud-img/mobile-development.jpg'
import E5 from '..//crud-img/ui-ux-design.jpg'
import E6 from '../crud-img/Website-development.jpg'
function Courses() {

  const course = [
    { 
      img : E1,  
      title:"Web Development",
      price:"49"
    },
    {
        img : E2, 
      title:"UI/UX Design",
      price:"39"
    },
    {   img : E3, 
      title:"Digital Marketing",
      price:"45"
    },
    {   img : E4, 
      title:"Data Science",
      price:"59"
    },
    {  img : E5, 
      title:"Mobile Development",
      price:"49"
    },
    {   img : E6, 
      title:"Business Management",
      price:"35"
    }
  ];

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Popular Courses
      </h2>

      <div className="row">

        {
          course.map((item,index)=>(
            <div
            className="col-lg-4 col-md-6 mb-4"
            key={index}
            >
              <div className="card shadow">

                <img
                src={item.img} style={{width:"25.9rem",height:"16rem",objectFit:"cover"}}
                className="card-img-top"
                alt=""
                />

                <div className="card-body">

                  <h5>
                    {item.title}
                  </h5>

                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>

                  <h4 className="text-primary">
                    ${item.price}
                  </h4>

                </div>

              </div>
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Courses;