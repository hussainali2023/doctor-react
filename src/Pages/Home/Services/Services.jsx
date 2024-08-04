import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/service/all-services")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setServices(data))
      .catch(error => console.error('Fetching error:', error));
  }, [])

  console.log(services)

  return (
    <div>
      <h1>This is Services page</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
