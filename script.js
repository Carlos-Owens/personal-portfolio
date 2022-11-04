const displayDivs = () => {
    const sign_up_form = document.getElementById('sign-up-form')
    const sign_up_project = document.getElementById('sign-up-form-project');
    const library = document.getElementById('library');
    const library_project = document.getElementById('library-project');
    const adminDash = document.getElementById('admin-dashboard');
    const admin_project = document.getElementById('admin-project');

    const showForm = () => {
        sign_up_project.style.display = 'block';
        sign_up_form.removeEventListener('click', showForm);
    }
    const closeForm = () => {
        sign_up_project.style.display = 'none';
        sign_up_form.addEventListener('click', showForm);
    }
    const showLibrary = () => {
        library_project.style.display = 'block';
        library.removeEventListener('click', showLibrary);

    }
    const closeLibrary = () => {
        library_project.style.display = 'none';
        library.addEventListener('click', showLibrary);
    }
    const showAdmin = () => {
        admin_project.style.display = 'block';
        adminDash.removeEventListener('click', showAdmin);
    }
    const closeAdmin = () => {
        admin_project.style.display = 'none';
        adminDash.addEventListener('click', showAdmin);
    }

    sign_up_form.addEventListener('click', closeForm);
    sign_up_form.addEventListener('click', showForm);
    library.addEventListener('click', showLibrary);
    library.addEventListener('click', closeLibrary);
    adminDash.addEventListener('click', showAdmin);
    adminDash.addEventListener('click', closeAdmin);
}

displayDivs();