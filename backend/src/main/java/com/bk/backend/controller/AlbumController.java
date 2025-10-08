package com.bk.backend.controller;

import com.bk.backend.dto.AlbumDTO;
import com.bk.backend.service.AlbumService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/album")
public class AlbumController {

    private final AlbumService service;

    @GetMapping("/list")
    public ResponseEntity<List<AlbumDTO>> getList() {
        List<AlbumDTO> dtos = service.getList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AlbumDTO> getOne(@PathVariable("id") Long id) {
        AlbumDTO dto = service.getOne(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addOne(@RequestBody AlbumDTO dto) {
        service.addOne(dto);
        return ResponseEntity.ok("성공");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return ResponseEntity.ok("성공");
    }

}
