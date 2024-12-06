import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        status: '',
        profilePicture: '',
    });

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        //API ROUTING NEEDED
        setProfileData({
            username: '',
            email: '',
            status: '',
            profilePicture: '#',
        });
    }, []);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setProfileData((prevState) => ({
                ...prevState,
                profilePicture: file,
            }));
        }
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        try {
            // Simulate an API call
            console.log('Saving profile data...', profileData);

            setTimeout(() => {
                console.log('Profile data saved!');
                navigate('/profile');
            }, 1000);
        } catch (error) {
            console.error('Error saving profile data', error);
        }
    };

    return (
        <div>
            <div className="edit-profile">
                <h1>Edit Profile</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={profileData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <textarea
                            id="status"
                            name="status"
                            value={profileData.status}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" onClick={handleSaveChanges}>
                        Save Changes
                    </button>
                </form>
            </div>

            <div>
                <label htmlFor="profilePicture">Profile Picture</label>
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {selectedImage && (
                    <div>
                        <h3>Preview:</h3>
                        <img
                            src={selectedImage}
                            alt="Selected Profile"
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                )}
            </div>

            <button type="button" onClick={handleSaveChanges}>
                Save Changes
            </button>
        </div >
    );
};

export default EditProfile;