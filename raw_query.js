const create_user = `INSERT INTO user_login (email,password)
VALUES (:mail, :hash)`;
const create_order = `INSERT INTO order_history(order_mail, 
order_list, order_date) VALUES (:email,
'[:orderList]',:date)`;

const register_user = `INSERT INTO registered_user (name,email,password)
VALUES (:name, :email, :hash)`;

const contact_reg = `INSERT INTO contacts (user_id,name,email,phone_no)
VALUES (:user_id, :name, :email, :phone_no)`;

module.exports ={
    signup: create_user,
    userHistory: create_order,
    register: register_user,
    contact: contact_reg
};


