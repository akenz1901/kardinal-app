import React, { useState } from 'react';
import swal from 'sweetalert';
import './index.scss';

export const SuccessModal = (props) => {
    const [page, setPage] = useState(props.page);
        swal("Congratulations, your email has been verified.");
        setTimeout(
            setPage(page + 1), 3000
        )
    }

export const ErrorModal = (props) => {
    const [page, setPage] = useState(props.page);
        swal("Please, Enter a Valid Work Email");
        setTimeout(
            setPage(page), 3000
        )
    }