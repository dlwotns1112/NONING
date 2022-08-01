package com.fivenonjangi.noning.service;

import com.fivenonjangi.noning.data.dto.user.*;
import com.fivenonjangi.noning.data.entity.user.UserData;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.List;

public interface UserService {
    void signupUser(SignupRequestDTO signupRequestDTO) throws Exception;
    UserDTO login(LoginRequestDTO loginRequestDTO, LocalDateTime curTime, PasswordEncoder passwordEncoder);
    UserData getUserByEmail(String email);
    UserData getUserById(long id);
    List<VoterResponseDTO> getUserListByBoardId(long boardId);
    UserDTO getUserResponse(long userId);
    void modifyUser(UserDTO userDTO) throws Exception;
    void editPassword(LoginRequestDTO.EditPasswordDTO editPasswordDTO, String userId, PasswordEncoder passwordEncoder) throws Exception;
    boolean checkPassword(String userId, String password, PasswordEncoder passwordEncoder);
}
