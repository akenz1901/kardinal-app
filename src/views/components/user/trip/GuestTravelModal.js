import React from "react";

export default function GuestTravelModal() {
    return(
        <div class="modal fade" id="addGuestTravelerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{paddingRight: "17px", display: "block"}}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Guest traveler</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-dark mb-4" role="alert">
                            Your company's default travel policy will be applied to all guest travelers.
                        </div>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    {/* <!--<label for="inputf">Title</label>--> */}
                                    <label class="new-control new-radio radio-primary">
                                        <input type="radio" class="new-control-input" name="custom-radio-2" checked="" />
                                        <span class="new-control-indicator"></span>Mr.
                                    </label>
                                    <label class="new-control new-radio radio-primary">
                                        <input type="radio" class="new-control-input" name="custom-radio-2" />
                                        <span class="new-control-indicator"></span>Mrs.
                                    </label>
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputf">First Name</label>
                                    <input type="text" class="form-control" id="inputf" placeholder="First Name" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputm">Middle Name</label>
                                    <input type="text" class="form-control" id="inputm" placeholder="Middle Name" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputl">Last Name</label>
                                    <input type="text" class="form-control" id="inputl" placeholder="Last Name" />
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    <div class="modal-footer">
                        <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                        <button type="button" class="btn btn-primary">Add Guest</button>
                    </div>
                </div>
            </div>
        </div>
    )
}