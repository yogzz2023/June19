import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const module = await import(`./${key}`);
      const { useQuery } = module.default;

      const { loading, error, data } = useQuery();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    fetchData();
    return <p>Loading...</p>;
  }

  // Render the fetched data
  return (
    <div>
      <h1>{key}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}





import React, { useState, useEffect } from 'react';

function UsersList(props) {
  const { key } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const module = await import(`./${key}`);
        const { useQuery } = module.default;

        const { loading, error, data } = useQuery();

        if (!loading && !error) {
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [key]);

  return (
    <div>
      <h1>Users</h1>
      {data && (
        <div>
          <h3>{data.name}</h3>
          {/* Render other data properties as needed */}
        </div>
      )}
    </div>
  );
}






import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const [data, setData] = useState(null);

  if (key && obj[key]) {
    import(`./${obj[key]}`).then((module) => {
      const { useQuery } = module.default;
      const { loading, error, data } = useQuery();
      setData(data);
    });
  }

  console.log(data);

  // Rest of your component code
}


import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./${obj[key]}`)
      .then((module) => {
        const { useQuery } = module.default;
        setLoading(true);
        return useQuery();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}



import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { name as nameQuery } from './schema.js';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    const query = nameQuery; // Access the specific query from the imported module

    useQuery(query)
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    setLoading(true);
  }

  console.log(data);

  // Rest of your component code...
}



import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js`)
      .then((module) => {
        const { useQuery, gql } = module;
        const query = gql`
          ${module[obj[key]].loc.source.body}
        `;
        setLoading(true);
        return useQuery(query);
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}






import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js/${obj[key]}`)
      .then((module) => {
        const { useQuery } = module.default;
        setLoading(true);
        return useQuery();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}




import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js/${obj[key]}`)
      .then((module) => {
        const { useQuery } = module.default;
        setLoading(true);
        return useQuery();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}






import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js/${obj[key]}`)
      .then((module) => {
        const { useQuery } = module;
        setLoading(true);
        return useQuery();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}
///this only
import { gql } from '@apollo/client';

export const queries = {
  name: gql`
    query GetUsers {
      users {
        id
        name
        email
      }
    }
  },
  // Add other queries here...
};




import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js`)
      .then((module) => {
        const { name } = module;
        setLoading(true);
        return useQuery(name);
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}


import { gql } from '@apollo/client';

export const name = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;








import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import('./schema.js')
      .then((module) => {
        const { useQuery, name } = module;
        const query = name;
        setLoading(true);
        return useQuery(query);
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}











import { useState } from 'react';

function UsersList(props) {
  const { key } = props;
  const obj = {
    name: 'Name',
    // Add other key-value pairs for your dynamic imports
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (obj[key]) {
    import(`./schema.js/${obj[key]}`)
      .then((module) => {
        const { default: query } = module;
        setLoading(true);
        return useQuery(query);
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  console.log(data);

  // Rest of your component code...
}







import { gql } from '@apollo/client';

export const name = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

// Export other GraphQL queries as needed







