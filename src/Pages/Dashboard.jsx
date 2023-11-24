import React from 'react';
import Card from 'react-bootstrap/Card';
import './dashboard.css';


function Dashboard() {
  return (
    <>
      <br />
      <br />

      <div className='container crdbx'>
        <br />

        <div>
          <h2 style={{ fontWeight: 'bolder' }}> Choose a plan that's just right for you!</h2>
        </div>
<div className="text-right">
          <button type="button" className="btn btn-outline-primary">Monthly</button>
          <button type="button" className="btn btn-outline-primary">Annually</button>
        </div>

        <br />
        <br />


        {/*--------------------------- CARD SECTION 1 ---------------------- */}

        <div className='row boxcard pt-1' style={{height:'30rem'}}>

          <div className='col-4 '>
            <Card style={{ width: '25rem', height: '27rem',  boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.3)' ,border:'none' ,borderRadius:'15px 15px 15px 15px'  }}>
              <Card.Body>
                <Card.Title>
                  <h3>BASIC</h3>
                </Card.Title>
                <Card.Subtitle className=' text-muted'>Card Subtitle</Card.Subtitle>
                <h5>$9.99/mo</h5>
                <button style={{ backgroundColor: 'rgba(250, 247, 97, 0.705)' }} type="button" class="btn  btn-sm">Get Started <i class="fa-solid fa-arrow-right-long"></i></button>
                <hr />
                <p>What you Will Get :</p>

                <p >
                  <i className='fa-regular fa-user p-1 '></i> Upto 25 Users
                </p>

                <p >
                  <i className='fa-solid fa-cloud p-1 '></i> Upto 25 GB Storage
                </p>

                <p >
                  <i className='fa-regular fa-envelope p-1 '></i> E-mail Support
                </p>

                <Card.Link style={{ color: 'black', fontWeight: 'bolder', paddingLeft: '20px' }} href='#'>
                  EXPLORE FEATURES <i style={{ color: 'rgba(250, 247, 97, 0.705)' }} class="fa-solid fa-play"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-4'>
            <Card style={{ width: '25rem', height: '27rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',border:'none',borderRadius:'15px 15px 15px 15px' }}>
              <Card.Body>
                <Card.Title>
                  <h3>STANDARD</h3>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
                <h5>$99.99/mo</h5>
                <button style={{ backgroundColor: 'rgba(248, 69, 69, 0.678)' }} type="button" class="btn  btn-sm">Get Started <i class="fa-solid fa-arrow-right-long"></i></button>

                <hr />
                <p>What you Will Get :</p>

                <p>
                  <i className='fa-regular fa-user p-1'></i> Upto 50 Users
                </p>

                <p>
                  <i className='fa-solid fa-cloud p-1'></i> Upto 60 GB Storage
                </p>

                <p>
                  <i className='fa-regular fa-envelope p-1'></i> E-mail + Chat Support
                </p>

                <Card.Link style={{ color: 'black', fontWeight: 'bolder', paddingLeft: '20px' }} href='#'>
                  EXPLORE FEATURES <i style={{ color: 'rgba(248, 69, 69, 0.678)' }} class="fa-solid fa-play"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className='col-4'>
            <Card style={{ width: '25rem', height: '27rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',border:'none',borderRadius:'15px 15px 15px 15px' }}>
              <Card.Body>
                <Card.Title>
                  <h3>PREMIUM</h3>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
                <h5>$ 199.99/mo</h5>
                <button style={{ backgroundColor: 'rgba(176, 69, 248, 0.678)' }} type="button" class="btn  btn-sm">Get Started <i class="fa-solid fa-arrow-right-long"></i> </button>

                <hr />
                <p>What you Will Get :</p>

                <p>
                  <i className='fa-regular fa-user p-1'></i>Upto 75 Users
                </p>

                <p>
                  <i className='fa-solid fa-cloud p-1'></i> Upto 100 GB Storage
                </p>

                <p>
                  <i className='fa-regular fa-envelope p-1'></i> E-mail + Chat + Whatsapp Support
                </p>


                <Card.Link style={{ color: 'black', fontWeight: 'bolder', paddingLeft: '20px' }} href='#'>
                  EXPLORE FEATURES <i style={{ color: 'rgba(176, 69, 248, 0.678)' }} class="fa-solid fa-play"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <br />
        <br />


        {/*--------------------------- CARD SECTION 2 ---------------------- */}

        <div className='row'>





        <div className='col-6 '  >

<Card style={{ width: '38rem', height: '20rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
  <Card.Body>

   <div className='row p-5 '>
      <div className='col-6' >

        <h5 style={{backgroundColor:'rgba(137, 247, 104, 0.705)',borderRadius:'5px 5px 5px 5px',width:'95px' , fontSize:'15px', alignItems:'center'  }}>Free Forever</h5>

    

    <h2>Free Starter</h2>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quasi nobis alias numquam ihil!</p>

    <button style={{ backgroundColor: 'rgba(137, 247, 104, 0.705)' }} type="button" class="btn  btn-sm">Get Started <i class="fa-solid fa-arrow-right-long"></i> </button>

      </div>

      <div className='col-6'>

      <h4>What you'll get</h4>

      <p> <i class="fa-regular fa-user pt-1"></i> Upto 8 Users</p>

      <p> <i class="fa-solid fa-cloud-arrow-up"></i> Upto 3GB Storage  </p>

      <p> <i class="fa-regular fa-envelope"></i> Email Support </p>

      <p><i class="fa-solid fa-check-double"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis </p>


      </div>
   </div>

  </Card.Body>
</Card>

</div>



          <div className='col-6 '  >

            <Card style={{ width: '38rem', height: '20rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
              <Card.Body>

               <div className='row p-5 '>
                  <div className='col-6' >
  
                    <h5 style={{backgroundColor:'rgba(119, 183, 255)',borderRadius:'5px 5px 5px 5px',width:'95px' , fontSize:'15px', alignItems:'center'  }}>Lets Connect</h5>
  
                
  
                <h2>Enterprice Plan</h2>
  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quasi nobis alias numquam ihil!</p>
  
                <button style={{ backgroundColor: 'rgba(119, 183, 255)' }} type="button" class="btn  btn-sm">Contact Us <i class="fa-solid fa-arrow-right-long"></i> </button>
  
                  </div>
  
                  <div className='col-6'>
  
                  <h4 className='pt-1'>What You will Get</h4>
  
                  <p> <i class="fa-regular fa-user p-1"></i> More than 75 Users</p>
  
                  <p><i class="fa-solid fa-check-double"></i> Customisation of all other Features</p>
  
  
                  </div>
               </div>

              </Card.Body>
            </Card>

          </div>



        </div>




      </div>

      <br />
      <br />

      <div>

      </div>
    </>
  );
}

export default Dashboard;
