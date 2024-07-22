import { Modal, ModalBody, ModalContent, Spinner } from "@nextui-org/react";

export default function PageLoading(props: IProps) {
  return (
    <Modal size={"full"} isOpen={props.open} hideCloseButton>
      <ModalContent>
        <>
          <ModalBody>
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center justify-center flex-col gap-4">
                <Spinner size="lg" />
                <h1 className="text-3xl font-semibold text-primary">LOADING</h1>
              </div>
            </div>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}

interface IProps {
  open?: boolean;
}
