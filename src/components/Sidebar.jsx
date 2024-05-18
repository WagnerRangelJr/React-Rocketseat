import { PencilLine } from 'phosphor-react';
import {Avatar} from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside  className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src=" https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/57499979?v=4"/>
                <strong>Wagner Rangel</strong>
                <span>Desenvolvedor Full Stack Junior</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}