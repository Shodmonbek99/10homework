import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Signup data:', formData); 
    navigate('/login'); 
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body border border-3">
              <h2 className="card-title">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label 
                  htmlFor="name" 
                  className="form-label">Name</label>

                  <input type="text" 
                  name="name" id="name" 
                  placeholder="Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" 
                  className="form-label">Email</label>

                  <input type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password"
                   className="form-label">
                    Password
                    </label>
                    
                  <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="form-control" />
                </div >
                <button type="submit" 
                className="btn btn-primary text-center"
                style={{ width: '505px' }}>
                  Save
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
