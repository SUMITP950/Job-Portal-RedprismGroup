import { toast } from "react-toastify";

export function _(x) {
    return document.querySelector(x);
}

export function toaster(status, current_toaster_id, mssg) {
    if (status === "load") {
        _("#loader").style.display = "block";
        const toaster_id = toast.loading("Please wait...");
        return toaster_id;
    }
    if (status === "success") {
        toast.update(current_toaster_id, { render: mssg, type: toast.TYPE.SUCCESS, isLoading: false, autoClose: true, closeButton: true });
        _("#loader").style.display = "none";
    }
    if (status === "error") {
        toast.update(current_toaster_id, { render: mssg, type: toast.TYPE.ERROR, isLoading: false, autoClose: true, closeButton: true });
        _("#loader").style.display = "none";
    }
}