import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import { Spinner } from '../component/Spinner.jsx';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import contactImage from '../../img/contactImage.png'

export const ContactList = () => {

    const { store, actions } = useContext(Context)
    const [contacts, setContacts] = useState([])
    const params = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        await actions.getAgendaContacts(params.agendaName).then((contacts) => {
            setContacts(contacts);
        });
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this contact?')) {
            await actions.deleteAgendaContact(params.agendaName, id).then(() => {
                fetchData()
            });
        }
        
    };

    const handleDeleteAgenda = async () => {
        if (confirm('Are you sure you want to delete this agenda?')) {
            await actions.deleteAgenda(params.agendaName).then(() => {
                navigate('/contact-list/');
            });
        }
    }

    const handleEdit = async (id) => {
        navigate(`/contact-list/${params.agendaName}/edit/${id}`);
    };

    const handleAddContact = () => {
        navigate(`/contact-list/${params.agendaName}/new`);
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        contacts == null || !contacts.contacts ? <div className="container d-flex justify-content-center align-items-center"><Spinner color="black" /></div> :
            <div className="container">
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h1>Agenda: {params.agendaName}</h1>
                    <div>
                    <button className='btn btn-success rounded py-1 mx-4' onClick={() => handleAddContact()}>Add Contact</button>
                    <button className='btn btn-danger rounded py-1' onClick={() => handleDeleteAgenda()}>Delete Agenda</button>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal flex-wrap d-flex justify-content-center">
                    {contacts.contacts.map((contact, index) => (
                        <li key={contact.id} className="list-group-item border-black rounded bg-secondary-subtle col-lg-5 col-12 m-2">
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h2 className="card-title">{contact.name}</h2>
                                    <div>
                                    <i className="btn rounded-circle btn-secondary fas fa-edit mx-2" onClick={() => handleEdit(contact.id)}/>
                                    <i className="btn rounded-circle btn-danger fas fa-trash-alt" onClick={() => handleDelete(contact.id)}/>
                                    </div>
                                </div>
                                <div className='d-flex p-0'>
                                    <div>
                                        <img className='img-fluid p-0' style={{ maxWidth: 100 }} src={contactImage} />
                                    </div>
                                    <div className="ml-2" style={{ maxWidth: 'calc(100% - 120px)' }}>
                                        <p className="card-text mt-1 mb-0" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}><i className="fas fa-mobile"/> {contact.phone}</p>
                                        <p className="card-text my-2" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}><i className="fas fa-map-marker-alt"/> {contact.address}</p>
                                        <p className="card-text my-0" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}><i className="fas fa-at"/> {contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )

}
