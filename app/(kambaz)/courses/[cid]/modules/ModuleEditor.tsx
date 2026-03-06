import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModuleEditor({
    dialogTitle,
    moduleName,
    setModuleName,
    addModule,
}: {
    dialogTitle: string;
    moduleName: string;
    setModuleName: (name: string) => void;
    addModule: () => void;
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
                onClick={handleShow}
            >
                <span className="position-relative me-2" style={{ bottom: "1px" }}>+</span>
                Module
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dialogTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        className="form-control"
                        value={moduleName}
                        placeholder="Introduction to Rocket Science"
                        onChange={(e) => setModuleName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            addModule();
                            handleClose();
                        }}
                    >
                        Add Module
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
