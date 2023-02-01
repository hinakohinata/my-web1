import React, { useState } from "react";
import "./CV.css"
import ava from '../image/brandHINA.png'
// import UpdateInfor from "./UpdateInfor";


const ProfileFunc = (name) => {
    console.log(name)
    return (

        <div class="row p-2 bg-primary text-white ">
            <div class="col-sm-8 p-3 align-self-center">
                <h1 id="txtTen">{name.ten}</h1>
                <h5 id="txtNganh">{name.nganh}</h5>
            </div>
            <div class="col-sm-4 p-2">
                <img src={name.avata} alt="avata" width="100%" height="100%" class="border border-white p-2" />
            </div>
        </div>
    );
}
const AddressFunc = (name) => {
    console.log(name)
    return (

        <div class="row p-2 bg-light">
            <div class="col-sm-6 p-4">
                <p class="text-primary">Điện thoại</p>
                <p>{name.SDT}</p>
                <p class="text-primary">Địa chỉ</p>
                <p>{name.Address}</p>
            </div>
            <div class="col-sm-6 p-4">
                <p class="text-primary">Email</p>
                <p>{name.email}</p>
            </div>
        </div>
    );
}




function LoadMyInf() {

    const [nganh, setNganh] = useState("Ứng dụng phần mềm")
    const [ten, setTen] = useState("Hoàng Thanh Lam")
    const [avata, setAvata] = useState(ava)
    const [SDT, setSDT] = useState("0901234450")
    const [Address, setAddress] = useState("Số 114/2 đường Nguyễn Xuân Nguyên phường Tân An TP. Buôn Ma Thuột tỉnh Đăk Lăk")
    const [email, setEmail] = useState("hoangthanhlam333@gmail.com")
    const [mucTieu, setMucTieu] = useState("Mong muốn ...")
    const [nodeJS, setNodeJS] = useState(1)
    const [english, setEng] = useState("3")
    const [java, setJava] = useState("2")
    const changeInfor = (event) => {
        // alert(document.getElementById('inputSDT').value)
        setTen(document.getElementById("inputName").value)
        setNganh(document.getElementById("inputNganh").value)
        setAvata(document.getElementById("inputName").value)
        setSDT(document.getElementById("inputSDT").value)
        setAddress(document.getElementById("inputAddress").value)
        setEmail(document.getElementById("inputEmail").value)
        setMucTieu(document.getElementById("inputMucTieu").value)
        // setNganh(document.getElementById("txtNganh").value)
        setNodeJS(document.getElementById("inputNodeJs").value)
        setEng(document.getElementById("inputEnglish").value)
        setJava(document.getElementById("inputJava").value)
    }

    const UpdateInfFunc = (name) => {
        console.log(name)
        return (

            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                    Update Information
                </button>
                <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalScrollableTitle">Update Information</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <label for="inputName">Tên</label>
                                            <input type="text" class="form-control" id="inputName" placeholder="Tên" />
                                        </div>
                                        <div class="form-group col-md-7">
                                            <label for="inputNganh">Ngành</label>
                                            <input type="text" class="form-control" id="inputNganh" placeholder="Ngành" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAvata">Avata</label>
                                        <input type="text" class="form-control" id="inputAvata" placeholder="URL" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <label for="inputSDT">Số điện thoại</label>
                                            <input type="text" class="form-control" id="inputSDT" placeholder="Số điện thoại" />
                                        </div>
                                        <div class="form-group col-md-7">
                                            <label for="inputEmail">Email</label>
                                            <input type="text" class="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Địa chỉ</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="inputMucTieu">Mục tiêu</label>
                                        <textarea type="textarea" class="form-control" id="inputMucTieu" placeholder="Mục tiêu" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputNodeJs">NodeJs</label>
                                            {/* <input type="text" class="form-control" id="inputSDT" placeholder="Số điện thoại" /> */}
                                            <select id="inputNodeJs" class="form-control">
                                                <option selected>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEnglish">English</label>
                                            {/* <input type="text" class="form-control" id="inputEmail" placeholder="Email" /> */}
                                            <select id="inputEnglish" class="form-control">
                                                <option selected>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputJava">Java</label>
                                            {/* <input type="text" class="form-control" id="inputSDT" placeholder="Số điện thoại" /> */}
                                            <select id="inputJava" class="form-control">
                                                <option selected>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={changeInfor} data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const SkillFunc = (name) => {
        return (
            <div>
                <p class="text-primary font-weight-bold">KỸ NĂNG</p>
                <lable>Node js</lable>
                <progress className="prosess-works" max="10" value={name.nodeJS} id="tientrinh"></progress>
                <lable>Tiếng anh</lable>
                <progress className="prosess-works" max="10" value={name.english} id="tientrinh"></progress>
                <lable>Java</lable>
                <progress className="prosess-works" max="10" value={name.java} id="tientrinh"></progress>

            </div>
        )
    }
    const LeftRowFunc = (name) => {
        console.log(name)
        return (
            <div>
                <p class="text-primary font-weight-bold">MỤC TIÊU NGHỀ NGHIỆP</p>
                <p>{mucTieu}</p>
                <SkillFunc nodeJS={nodeJS} english={english} java={java} />
                <p class="text-primary font-weight-bold">CHỨNG CHỈ</p>
                <p>Chưa có</p>
                <p class="text-primary font-weight-bold">GIẢI THƯỞNG</p>
                <p>Chưa có</p>
                <p class="text-primary font-weight-bold">SỞ THÍCH</p>
                <p>Nghe nhạc,...</p>
            </div>
        );
    }





    return (
        <div class="container">
            <ProfileFunc ten={ten} nganh={nganh} avata={avata} />
            <AddressFunc SDT={SDT} Address={Address} email={email} />
            <div class="row p-2 ">
                <div class="col-sm-6 p-3">
                    <LeftRowFunc />
                </div>

                <div class="col-sm-6 p-3">
                    <p class="text-primary font-weight-bold">HỌC VẤN</p>
                    <p class="text-primary font-weight-bold">Cao đẳng FPT Polytechnic</p>
                    <p>Chuyên ngành: Ứng dụng phần mềm</p>
                    <p>20/7/2021 - hiện tại</p>
                    <p class="text-primary font-weight-bold">KINH NGHIỆM LÀM VIỆC</p>
                    <p>Chưa có</p>
                    <p class="text-primary font-weight-bold">NGƯỜI THAM CHIẾU</p>
                    <p>Anh/Chị ....</p>
                </div>
            </div>
            <div class="row">

            </div>




            {/* <progress className="prosess-works" max="10" value="2" id="tientrinh"></progress> */}
            <UpdateInfFunc />


        </div>
    )
}
export default LoadMyInf;