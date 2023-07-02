import './App.css';
// import ava1 from './img/ava1.jpg';
// import ava2 from './img/ava2.jpg';
// import ava3 from './img/ava3.jpg';

function App() {

  const data = [
    {
      id: 1,
      name: 'Vlad',
      lastname: 'Anthulevich',
      email: 'example1@email.com',
      gen: 'men',
      imageFile: 'https://papik.pro/en/uploads/posts/2022-06/1655712245_10-papik-pro-p-cool-profile-picture-avatars-10.jpg'
    },
    {
      id: 2,
      name: 'Roma',
      lastname: 'Cho-toTam',
      email: 'example2@email.com',
      gen: 'men',
      imageFile: 'https://ru-static.z-dn.net/files/def/2aae5b50030c7f7531f1b63d812ab3cc.jpg'
    },
    {
      id: 3,
      name: 'Nastya',
      lastname: 'Neodecvat',
      email: 'example3@email.com',
      gen: 'wom',
      imageFile: 'https://ru-static.z-dn.net/files/d31/bb138cdc975f2153aa1f12e3752a9bea.jpg'
    }
  ]

  const User = ({name, email, id, lastname, gen, src}) => {
    return (
      <div className='userBlock'>
        <div className='imgBlock'><img className='img' alt='(' src={src} /></div>
        <div>
          <h4>ID: {id}</h4>
          <h4>{lastname} {name}</h4>
          <p>Email: {email}</p>
          <p>gen: {gen}</p>
        </div>
      </div>
    );
  }
  
  const UserList = ({users}) => {
    const userListItems = users.map(user => {return <User src={user.imageFile} gen={user.gen} lastname={user.lastname} id={user.id} key={user.id} name={user.name} email={user.email} />;});
    return userListItems;
  }

  return (
    <div className="App">
      <div className='mainBlock'>
        <UserList users={data}/>
      </div>
    </div>
  );
}

export default App;
