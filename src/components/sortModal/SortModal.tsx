import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { CustomButton } from "../button/CustomButton";

type SortOption = "latest" | "oldest" | "popular";

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (option: SortOption) => void;
  currentSort: SortOption;
}

export const SortModal: React.FC<SortModalProps> = ({ visible, onClose, onSelect, currentSort }) => {
  const [selectedOption, setSelectedOption] = useState<SortOption>(currentSort);

  const handleConfirm = () => {
    onSelect(selectedOption);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Sort records by:</Text>

          <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption("latest")}>
            <View style={styles.radioButton}>
              {selectedOption === "latest" && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.optionText}>Upload date: latest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption("oldest")}>
            <View style={styles.radioButton}>
              {selectedOption === "oldest" && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.optionText}>Upload date: oldest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer} onPress={() => setSelectedOption("popular")}>
            <View style={styles.radioButton}>
              {selectedOption === "popular" && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.optionText}>Most popular</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <CustomButton style={styles.confirmButton} onPress={handleConfirm} title="Confirm" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(43,45,66,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: 400,
    backgroundColor: "#8D99AE",
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 24,
    color: "#FFFFFF",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: "#2B2D42",
  },
  optionText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  confirmButton: {
    flex: 1,
    width: "100%",
  },
});
